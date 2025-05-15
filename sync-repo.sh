#!/bin/bash

# Script para sincronizar automáticamente el repositorio
# Uso: ./sync-repo.sh "Mensaje del commit"

# Colores para la salida
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar si se ha proporcionado un mensaje de commit
if [ -z "$1" ]; then
  echo -e "${RED}Error: Debes proporcionar un mensaje para el commit${NC}"
  echo -e "Uso: ./sync-repo.sh \"Mensaje del commit\""
  exit 1
fi

# Actualizando el repositorio local desde el remoto
echo -e "${YELLOW}Actualizando el repositorio local desde GitHub...${NC}"
git pull origin main

# Si hay errores en el pull, salir
if [ $? -ne 0 ]; then
  echo -e "${RED}Error al actualizar desde el repositorio remoto. Resuelve los conflictos manualmente.${NC}"
  exit 1
fi

# Agregando todos los cambios
echo -e "${YELLOW}Agregando todos los cambios...${NC}"
git add .

# Realizando el commit con el mensaje proporcionado
echo -e "${YELLOW}Realizando commit: $1${NC}"
git commit -m "$1"

# Subiendo los cambios al repositorio remoto
echo -e "${YELLOW}Subiendo cambios a GitHub...${NC}"
git push origin main

# Verificar si el push fue exitoso
if [ $? -eq 0 ]; then
  echo -e "${GREEN}¡Sincronización completada con éxito!${NC}"
else
  echo -e "${RED}Error al subir los cambios. Intenta resolver manualmente.${NC}"
  exit 1
fi 