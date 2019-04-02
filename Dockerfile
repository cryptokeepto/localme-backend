FROM centos
RUN yum update -y
RUN yum install httpd -y
EXPOSE 80
CMD ["httpd", "-DFOREGROUND"]
