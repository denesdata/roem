docker cp /home/ubuntu/html/style/grafana/dark.css grafana:/usr/share/grafana/public/build/grafana.dark.41bc.css
docker cp /home/ubuntu/html/style/grafana/light.css grafana:/usr/share/grafana/public/build/grafana.light.41bc.css
docker cp /home/ubuntu/html/style/grafana/index.html grafana:/usr/share/grafana/public/views/index.html
docker cp /home/ubuntu/html/style/grafana/index.html grafana:/usr/share/grafana/public/views/index-template.html
docker cp /home/ubuntu/html/style/grafana/dashboard.js grafana:/usr/share/grafana/public/build/DashboardPage.41bc4b193210d0f899b3.js
docker restart grafana