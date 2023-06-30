FROM node:20

# Make privillage
COPY --from=vsc32538.live.dynatrace.com/linux/oneagent-codemodules:nodejs / /
ENV LD_PRELOAD /opt/dynatrace/oneagent/agent/lib64/liboneagentproc.so

# Add our code
RUN mkdir /api
WORKDIR /api
ADD . /api
RUN npm install --production


# Run the app.
CMD ["npm", "start"]