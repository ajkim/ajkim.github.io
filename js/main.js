Portfolio = Backbone.Model.extend({
	initialize:  function(){console.log("portfolio!");}
});


Home = Backbone.View.extend({
	el : $('#container'),

	initialize: function(){
		console.log("home view");
		this.render();
	},

	render: function(){
		var first_template = _.template($('#home_template').html(), {});
		this.$el.html(first_template);
	}

});

About = Backbone.View.extend({
	el : $('#container'),

	initialize: function(){
		console.log("about view");
		this.render();
	},

	render: function(){
		var second_template = _.template($('#about_template').html(), {});
		this.$el.html(second_template);
	}

});

Projects = Backbone.View.extend({
	el : $('#container'),

	initialize: function(){
		console.log("projects view");
		this.render();
	},

	render: function(){
		var third_template = _.template($('#projects_template').html(), {});
		this.$el.html(third_template);
	}

});

Resume = Backbone.View.extend({
	el : $('#container'),

	initialize: function(){
		console.log("resume view");
		this.render();
	},

	render: function(){
		var fourth_template = _.template($('#resume_template').html(), {});
		this.$el.html(fourth_template);
	}
});


var PortfolioRouter = Backbone.Router.extend({
	routes:{
		"" : "home",
		"home" : "home",
		"about" : "about", 
		"projects" : "projects",
		"resume" : "resume"
	},

	home: function(){
		console.log("Home");
		new Home();
	}, 
	about: function(){
		console.log("About");
		new About();
	}, 
	projects: function(){
		console.log("Projects");
		new Projects();
	},
	resume: function(){
		console.log("Resume");
		new Resume();
	}

});

var router = new PortfolioRouter();
Backbone.history.start();

$(function(){
	console.log("doc ready");

	var display = new Home();
});







