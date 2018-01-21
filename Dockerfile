FROM nginx:1.12-alpine
VOLUME /tmp
RUN rm -rf /usr/share/nginx/html
ADD build/* /usr/share/nginx/html/