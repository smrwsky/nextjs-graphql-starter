#!/bin/sh

echo "Providing env vars to NextJs"

find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 \
  sed -i \
    -e "s#APP_NEXTAUTH_SECRET#$NEXTAUTH_SECRET#g" \
    -e "s#APP_NEXTAUTH_URL#$NEXTAUTH_URL#g" \
    -e "s#APP_NEXTAUTH_CALLBACK_URI#$NEXTAUTH_CALLBACK_URI#g" \
    -e "s#APP_NEXTAUTH_ISSUER#$NEXTAUTH_ISSUER#g" \
    -e "s#APP_GRAPHQL_GATEWAY#$GRAPHQL_GATEWAY#g" \
    -e "s#APP_FILES_API#$FILES_API#g" \
    -e "s#APP_BLOB_STORAGE#$BLOB_STORAGE#g"

echo "Starting NextJs"
exec "$@"
