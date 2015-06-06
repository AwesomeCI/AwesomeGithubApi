'use strict';

var GithubAPI = function(){

};

GithubAPI.prototype.slug = function (){
    return "github";
};

GithubAPI.prototype.name = function (){
    return "Github API";
};

GithubAPI.prototype.middleware = function (req, res, next){
    next();
};


GithubAPI.prototype.router = function (router){
};

GithubAPI.prototype.menu = function (){
    return null;
};

module.exports = GithubAPI;