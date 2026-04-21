# === Script para limpiar y recompilar proyecto Next.js ===

Write-Host "Limpiando proyecto..."

# Eliminar carpeta .next
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
    Write-Host "Carpeta .next eliminada"
}

# Eliminar carpeta node_modules
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
    Write-Host "Carpeta node_modules eliminada"
}

# Eliminar package-lock.json
if (Test-Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
    Write-Host "package-lock.json eliminado"
}

Write-Host "Proyecto limpio. Ejecutando npm install..."
npm install

Write-Host "Instalación completa. Ejecutando npm run build..."
npm run build

Write-Host "Build completada. Iniciando servidor con npm start..."
npm run dev
