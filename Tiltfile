if os.name == 'nt':  # Windows
    shell_cmd_g = 'cmd.exe'
    shell_opt_g = '/c'
else:  # Unix, Linux, MacOS
    shell_cmd_g = '/bin/sh'
    shell_opt_g = '-c'

load_dynamic('./react-frontend/Tiltfile')

load('./tilt-lib/Tiltfile-buttons','checkout_main')
load('./tilt-lib/Tiltfile-buttons','pull_latest')
load('./tilt-lib/Tiltfile-buttons','git_branch')

checkout_main(shell_cmd_g, shell_opt_g, '.', '(Tiltfile)')
pull_latest(shell_cmd_g, shell_opt_g,'.', '(Tiltfile)')