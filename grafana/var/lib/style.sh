docker cp dark.css grafana:/usr/share/grafana/public/build/grafana.dark.898fe9e20a782b4232f.css
docker cp light.css grafana:/usr/share/grafana/public/build/grafana.light.898fe9e20a782b4232f.css
docker cp index.html grafana:/usr/share/grafana/public/views/index.html
docker cp index.html grafana:/usr/share/grafana/public/views/index-template.html
docker restart grafana