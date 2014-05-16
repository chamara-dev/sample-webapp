rm -rf selenium-screenshot-*.png;
rm -rf log.html output.xml report.html
pybot login_screen
python -m SimpleHTTPServer 9090

