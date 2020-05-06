FROM jupyter/base-notebook
RUN pip install pandas
RUN pip install influxdb
RUN pip install matplotlib
ENTRYPOINT ["jupyter", "lab", "--ip=0.0.0.0", "--allow-root" , "--NotebookApp.token=YOUR_PASSWORD_HERE"]