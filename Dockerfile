FROM node:16 AS ui-build
WORKDIR /usr/src/app
COPY api ./api/
RUN cd api && npm install
#COPY api/server.js ./api/

EXPOSE 3080

CMD ["node", "./api/server.js"]
