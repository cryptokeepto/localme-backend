FROM centos
RUN yum update -y
RUN yum install httpd -y
CMD ["httpd", "-DFOREGROUND"]