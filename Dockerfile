FROM node:19

#Set up Dynatrce for ARM
ENV DT_API_URL=https://vsc32538.live.dynatrace.com/api
ENV DT_ONEAGENT_TECHNOLOGY=nodejs

RUN mkdir -p /opt/dynatrace/oneagent && ARCHIVE=$(mktemp) && wget -O $ARCHIVE "$DT_API_URL/v1/deployment/installer/agent/unix/paas/latest?Api-Token=$DT_PAAS_TOKEN&flavor=default&arch=arm&include=$DT_ONEAGENT_TECHNOLOGY" && unzip -o -d /opt/dynatrace/oneagent $ARCHIVE && rm -f $ARCHIVE
ENV LD_PRELOAD /opt/dynatrace/oneagent/agent/lib64/liboneagentproc.so

# Add our code
RUN mkdir /api
WORKDIR /api
ADD . /api
RUN npm install --production


# Run the app.
CMD ["npm", "start"]