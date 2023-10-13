FROM --platform=linux/x86_64 node:20

# #Set up Dynatrce for X86
ENV DT_API_URL=https://vsc32538.live.dynatrace.com/api
ENV DT_ONEAGENT_TECHNOLOGY=nodejs
ENV ARCHITECTURE=x86
ARG DT_PAAS_TOKEN

RUN apt-get update && apt-get install -y --no-install-recommends openssh-client && rm -rf /var/lib/apt/lists/*
RUN mkdir -p /opt/dynatrace/oneagent && ARCHIVE=$(mktemp) && wget -O $ARCHIVE "$DT_API_URL/v1/deployment/installer/agent/unix/paas/latest?Api-Token=$DT_PAAS_TOKEN&flavor=default&arch=$ARCHITECTURE&include=$DT_ONEAGENT_TECHNOLOGY" && unzip -o -d /opt/dynatrace/oneagent $ARCHIVE && rm -f $ARCHIVE
ENV LD_PRELOAD /opt/dynatrace/oneagent/agent/lib64/liboneagentproc.so

# Add our code
RUN mkdir /api
WORKDIR /api
ADD . /api
RUN npm install --omit=dev --legacy-peer-deps
ENV NODE_ENV=production

# Run the app.
CMD ["npm", "start"]