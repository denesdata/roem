FROM jupyter/base-notebook
RUN pip install pandas
RUN pip install influxdb
RUN pip install matplotlib
RUN pip install fuzzywuzzy
RUN pip install openpyxl
RUN pip install lxml
ENTRYPOINT ["jupyter", "lab", "--ip=0.0.0.0", "--allow-root" , "--NotebookApp.token=COVYD9@ubbclujJP"]