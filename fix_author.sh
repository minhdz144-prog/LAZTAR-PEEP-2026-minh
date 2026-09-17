#!/bin/sh
if [ "$GIT_AUTHOR_NAME" = "Le Hoang Thuan" ]; then
    GIT_AUTHOR_NAME="Giang Van Minh"
    GIT_AUTHOR_EMAIL="minhdz144@gmail.com"
    GIT_COMMITTER_NAME="Giang Van Minh"
    GIT_COMMITTER_EMAIL="minhdz144@gmail.com"
fi
export GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL
