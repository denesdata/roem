docker cp /home/ubuntu/html/style/grafana/dark.css grafana:/usr/share/grafana/public/build/grafana.dark.YOUR_BUILD_STRING_HERE.css
docker cp /home/ubuntu/html/style/grafana/light.css grafana:/usr/share/grafana/public/build/grafana.light.YOUR_BUILD_STRING_HERE.css
docker cp /home/ubuntu/html/style/grafana/index.html grafana:/usr/share/grafana/public/views/index.html
docker cp /home/ubuntu/html/style/grafana/index.html grafana:/usr/share/grafana/public/views/index-template.html
docker cp /home/ubuntu/html/style/grafana/dashboard.js grafana:/usr/share/grafana/public/build/DashboardPage.YOUR_BUILD_STRING_HERE.js
docker restart grafana