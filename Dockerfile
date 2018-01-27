FROM nginx:1.12-alpine
VOLUME /tmp
ENV nginx_dir=/usr/share/nginx
RUN rm -rf $nginx_dir/html
ADD build $nginx_dir/
RUN mv $nginx_dir/build $nginx_dir/html