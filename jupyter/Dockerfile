FROM jupyter/base-notebook
RUN pip install pandas
RUN pip install influxdb
RUN pip install matplotlib
RUN pip install fuzzywuzzy
RUN pip install openpyxl
ENTRYPOINT ["jupyter", "lab", "--ip=0.0.0.0", "--allow-root" , "--NotebookApp.token=YOUR_PASSWORD_HERE"]