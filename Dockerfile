#FROM nginx:alpine
#FROM docker.irenshi.cn/alpine-nginx
FROM docker.irenshi.cn/alpine-nginx-supervisor

MAINTAINER David Wei "david.wei@ihr360.com"

ADD ./etc /etc
#RUN apk update
#RUN apk add supervisor curl
# sshd_config file is edited for enable access key and disable access password
# 根据不同项目修改 /opt/XXX项目名称
RUN mkdir -p /etc/supervisor.d /opt/XXX /scripts
ENV MONIT intranet
ENV BRANCH dev
RUN echo '*    *     *     *     *     run-parts /scripts' >> /etc/crontabs/root
ADD scripts/health /scripts/health
ADD supervisor/nginx.ini /etc/supervisor.d/
ADD supervisor/cron.ini /etc/supervisor.d/
RUN chmod +x /scripts/health

ADD  build /opt/XXX

EXPOSE 22

CMD ["supervisord", "-n"]
