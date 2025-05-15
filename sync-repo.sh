#!/bin/bash

# Script para sincronizar automáticamente el repositorio
# Uso: ./sync-repo.sh "Mensaje del commit"

# Colores para la salida
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Verificar si se ha proporcionado un mensaje de commit
if [ -z "$1" ]; then
  echo -e "${RED}Error: Debes proporcionar un mensaje para el commit${NC}"
  echo -e "Uso: ./sync-repo.sh \"Mensaje del commit\""
  exit 1
fi

# Verificar si hay cambios para hacer commit
echo -e "${YELLOW}Verificando cambios en el repositorio...${NC}"
if [[ -z $(git status -s) ]]; then
  echo -e "${BLUE}No hay cambios pendientes en el repositorio.${NC}"
  echo -e "${GREEN}¡El repositorio está actualizado!${NC}"
  exit 0
fi

# Primero, comprobar si hay cambios remotos
echo -e "${YELLOW}Comprobando si hay cambios en el repositorio remoto...${NC}"
git fetch origin

# Si la rama local está detrás de la remota, hacer un pull antes
if [ "$(git rev-list HEAD..origin/main --count)" -gt 0 ]; then
  echo -e "${YELLOW}La rama local está desactualizada. Descargando cambios remotos...${NC}"
  
  # Guardar cambios locales temporalmente
  echo -e "${YELLOW}Guardando cambios locales...${NC}"
  git stash
  
  # Actualizar la rama local
  echo -e "${YELLOW}Actualizando la rama local...${NC}"
  git pull origin main
  
  # Aplicar cambios locales nuevamente
  echo -e "${YELLOW}Aplicando cambios locales guardados...${NC}"
  git stash pop
  
  # Verificar si hubo conflictos
  if [ -n "$(git ls-files --unmerged)" ]; then
    echo -e "${RED}Se detectaron conflictos al aplicar los cambios locales.${NC}"
    echo -e "${RED}Por favor, resuelve los conflictos manualmente y vuelve a intentarlo.${NC}"
    exit 1
  fi
else
  # Si no hay cambios remotos, intentar pull normal
  echo -e "${YELLOW}Actualizando el repositorio local desde GitHub...${NC}"
  git pull origin main
  
  # Si hay errores en el pull, salir
  if [ $? -ne 0 ]; then
    echo -e "${RED}Error al actualizar desde el repositorio remoto. Resuelve los conflictos manualmente.${NC}"
    exit 1
  fi
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
  echo -e "${YELLOW}Detalles del commit:${NC}"
  echo -e "${BLUE}$(git log -1 --pretty=format:'%h - %an, %ar: %s')${NC}"
else
  echo -e "${RED}Error al subir los cambios. Intenta resolver manualmente.${NC}"
  echo -e "${YELLOW}Puedes intentar con: ${BLUE}git pull --rebase origin main${NC} y luego ${BLUE}git push origin main${NC}"
  exit 1
fi 