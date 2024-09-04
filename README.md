# github-actions
Github actions used in the Trino project

Some actions are forked with no local changes to defend against changes with a hash collision and repo deletion:
* [github-app-token](/github-app-token) is forked from [https://github.com/tibdex/github-app-token](https://github.com/tibdex/github-app-token) at [v1.6.0 (f66c1c3)](https://github.com/tibdex/github-app-token/commit/f66c1c31c49c0a4d593a5820a9f1e231af3321ad)
* [slash-command-dispatch](/slash-command-dispatch) is forked from [peter-evans/slash-command-dispatch](https://github.com/peter-evans/slash-command-dispatch) at [v3.0.0 (71e68e5)](https://github.com/peter-evans/slash-command-dispatch/commit/71e68e5b4a13cff7a8c0c290f4fb9e615d873944)

Following actions are forked with changes:
* [action-surefire-report](/action-surefire-report) is forked from [ScaCap/action-surefire-report](https://github.com/ScaCap/action-surefire-report) at [v1.6.2 (7263a78)](https://github.com/ScaCap/action-surefire-report/commits/7263a78ba060b395c8a0a0e58fc897efb1bddb7c) to:
  * use a more efficient XML parser library, which was reverted in later versions, because it's not portable
