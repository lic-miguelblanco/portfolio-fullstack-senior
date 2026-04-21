const fs = require("fs");
const path = require("path");

function checkFileExists(filePath) {
  return fs.existsSync(filePath);
}

function checkLowercase(filePath) {
  return path.basename(filePath) === path.basename(filePath).toLowerCase();
}

function runChecks() {
  console.log("🔎 Verificando proyecto Next.js...\n");

  // 1. Verificar index.tsx
  const indexPath = path.join(process.cwd(), "pages", "index.tsx");
  if (checkFileExists(indexPath) && checkLowercase(indexPath)) {
    console.log("✅ Archivo pages/index.tsx encontrado y en minúsculas.");
  } else {
    console.log("❌ No se encontró pages/index.tsx o el nombre no está en minúsculas.");
  }

  // 2. Verificar lockfiles
  const hasYarnLock = checkFileExists(path.join(process.cwd(), "yarn.lock"));
  const hasPackageLock = checkFileExists(path.join(process.cwd(), "package-lock.json"));
  if (hasYarnLock && hasPackageLock) {
    console.log("⚠️ Tienes yarn.lock y package-lock.json. Elimina uno para evitar conflictos.");
  } else if (hasYarnLock) {
    console.log("✅ Usando Yarn (yarn.lock presente).");
  } else if (hasPackageLock) {
    console.log("✅ Usando npm (package-lock.json presente).");
  } else {
    console.log("❌ No se encontró lockfile. Ejecuta npm install o yarn install.");
  }

  // 3. Verificar next.config.js
  const nextConfigPath = path.join(process.cwd(), "next.config.js");
  if (checkFileExists(nextConfigPath)) {
    const configContent = fs.readFileSync(nextConfigPath, "utf8");
    if (configContent.includes("remotePatterns")) {
      console.log("✅ Configuración de imágenes usa remotePatterns.");
    } else {
      console.log("⚠️ Configuración de imágenes aún usa domains. Actualiza a remotePatterns.");
    }
    if (configContent.includes("appDir: false")) {
      console.log("✅ experimental.appDir desactivado.");
    } else {
      console.log("⚠️ experimental.appDir no está configurado. Revisa si usas carpeta /app.");
    }
  } else {
    console.log("❌ No se encontró next.config.js.");
  }

  // 4. Verificar variables de entorno
  const envPath = path.join(process.cwd(), ".env.local");
  if (checkFileExists(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf8");
    if (envContent.includes("DEV_API_KEY")) {
      console.log("✅ Variable DEV_API_KEY declarada en .env.local.");
    } else {
      console.log("⚠️ Falta DEV_API_KEY en .env.local.");
    }
    if (envContent.includes("VIBLO_API_KEY")) {
      console.log("ℹ️ VIBLO_API_KEY declarada, aunque no es necesaria para tu endpoint actual.");
    }
  } else {
    console.log("⚠️ No se encontró .env.local. Declara tus variables en Vercel directamente.");
  }

  console.log("\n✅ Verificación completa.");
}

runChecks();
