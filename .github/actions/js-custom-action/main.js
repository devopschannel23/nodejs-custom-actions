const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

function execute() {
    core.notice("Hurray! I have successfully created JS Custom actions!");
}
execute();