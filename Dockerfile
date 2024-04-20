FROM nginx:1.25.5-alpine
COPY dist/ /usr/share/nginx/html
