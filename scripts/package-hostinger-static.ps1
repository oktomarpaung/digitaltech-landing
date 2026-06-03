$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "out"
$zipPath = Join-Path $root "digitaltechsolusi-out.zip"

function Add-ZipItem {
  param(
    [Parameter(Mandatory = $true)][System.IO.FileSystemInfo]$Item,
    [Parameter(Mandatory = $true)][string]$EntryName,
    [Parameter(Mandatory = $true)]$Archive
  )

  if ($Item.PSIsContainer) {
    Get-ChildItem -LiteralPath $Item.FullName -Force | ForEach-Object {
      Add-ZipItem -Item $_ -EntryName ($EntryName + "/" + $_.Name) -Archive $Archive
    }
    return
  }

  [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
    $Archive,
    $Item.FullName,
    $EntryName,
    [System.IO.Compression.CompressionLevel]::Optimal
  ) | Out-Null
}

if (-not (Test-Path -LiteralPath $outDir -PathType Container)) {
  throw "Folder out/ tidak ditemukan. Jalankan npm run build terlebih dahulu."
}

$requiredPaths = @(
  "index.html",
  "_next",
  "screenshots",
  "logo-dtn.png",
  "og-digitaltech.png",
  "deploy-check.txt",
  ".htaccess"
)

foreach ($relativePath in $requiredPaths) {
  $fullPath = Join-Path $outDir $relativePath
  if (-not (Test-Path -LiteralPath $fullPath)) {
    throw "File/folder wajib tidak ditemukan di out/: $relativePath"
  }
}

if (Test-Path -LiteralPath $zipPath) {
  Remove-Item -LiteralPath $zipPath -Force
}

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$archive = [System.IO.Compression.ZipFile]::Open($zipPath, [System.IO.Compression.ZipArchiveMode]::Create)
try {
  Get-ChildItem -LiteralPath $outDir -Force | ForEach-Object {
    Add-ZipItem -Item $_ -EntryName $_.Name -Archive $archive
  }
}
finally {
  $archive.Dispose()
}

Write-Host "Created $zipPath"
Write-Host "ZIP berisi isi folder out/ secara langsung, bukan folder out/."
