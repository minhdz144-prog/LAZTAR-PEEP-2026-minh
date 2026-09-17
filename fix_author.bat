@echo off
set FILTER_BRANCH_SQUELCH_WARNING=1
E:\Git\cmd\git.exe filter-branch -f --env-filter ^
"OLD_NAME='Le Hoang Thuan'; CORRECT_NAME='Giang Van Minh'; CORRECT_EMAIL='minhdz144@gmail.com'; if [ \"$GIT_AUTHOR_NAME\" = \"$OLD_NAME\" ]; then export GIT_AUTHOR_NAME=\"$CORRECT_NAME\"; export GIT_AUTHOR_EMAIL=\"$CORRECT_EMAIL\"; fi; if [ \"$GIT_COMMITTER_NAME\" = \"$OLD_NAME\" ]; then export GIT_COMMITTER_NAME=\"$CORRECT_NAME\"; export GIT_COMMITTER_EMAIL=\"$CORRECT_EMAIL\"; fi" ^
7e4a46c..HEAD
