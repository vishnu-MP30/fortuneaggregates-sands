import subprocess
out = subprocess.check_output('wmic process where "name=\'node.exe\'" get ProcessId,CommandLine', shell=True).decode('utf-8', errors='ignore')
print(out)
