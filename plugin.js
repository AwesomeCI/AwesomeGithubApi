'use strict';

var GithubPullRequestBuilder = function(){

};

GithubPullRequestBuilder.prototype.slug = function (){
    return "ghprb";
};

GithubPullRequestBuilder.prototype.name = function (){
    return "Github Pull Request Builder";
};

GithubPullRequestBuilder.prototype.middleware = function (req, res, next){
    next();
};


GithubPullRequestBuilder.prototype.router = function (router){
    router.get("/webhook/", function (req, res){
        res.json({
            error : false,
            route : "get webhook"
        });
    });
    router.post("/webhook/", function (req, res){
        res.json({
            error : false,
            route : "post webhook"
        });
    });
};

GithubPullRequestBuilder.prototype.menu = function (){
    return {
        "icon" : "ti-github",
        "text" : "Github Pull Request Builder",
        "href" : "/ghprb/"
        "submenu" : [
            {
                "icon" : "",
                "text" : "Configure",
                "href" : "/ghprb/configure"
            }
        ]
    };
};

module.exports = ghpGithubPullRequestBuilderrb;