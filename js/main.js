Portfolio = Backbone.Model.extend({
	initialize:  function(){console.log("portfolio!");}
});


Home = Backbone.View.extend({
	el : $('#container'),

	initialize: function(){
		console.log("home view");
		this.instagram();
		this.render();
	},

	instagram: function(){
		$.ajax({
	  url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=3819378.cf36be6.700a70df191e49f6b263ecee48de664f',
	  data: {
	    format: 'json'
	  },
	  error: function() {
	    $('#info').html('<p>An error has occurred</p>');
	  },
	  dataType: 'jsonp',
	  success: function(data) {

	  	_.each(data.data, function (obj) {
	  		var imageUrl = obj.images.thumbnail.url;
	  		var link = obj.link;

	  		var $img = $('<img src='+imageUrl+' width=40 height=40>');
		    $('.photos')
		      .append($img);
		    });
	  	},
		  type: 'GET'
		});
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

Contact = Backbone.View.extend({
	el : $('#container'),

	initialize: function(){
		console.log("resume view");
		this.render();
	},

	render: function(){
		var fifth_template = _.template($('#contact_template').html(), {});
		this.$el.html(fifth_template);
	}
});

Skills = Backbone.View.extend({
	el : $('#container'),

	initialize: function(){
		console.log("resume view");
		this.render();
	},

	render: function(){
		var sixth_template = _.template($('#skills_template').html(), {});
		this.$el.html(sixth_template);
	}
});


var PortfolioRouter = Backbone.Router.extend({
	routes:{
		"" : "home",
		"home" : "home",
		"about" : "about",
		"projects" : "projects",
		"resume" : "resume",
		"contact" : "contact",
		"skills" : "skills"
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
	},
	contact: function(){
		console.log("Contact");
		new Contact();
	},
	skills: function(){
		console.log("Skills");
		new Skills();
	}

});

var router = new PortfolioRouter();
Backbone.history.start();

$(function(){
	console.log("doc ready");

	var display = new Home();

	var Gallery = {
		Elements: {

			items: $('div.item', '#portfolio'),
			details: $('#portfolio-details', '#portfolio')

		},

		suck: {
			it: function(){
				Gallery.Elements.items.each(function(){
					var $item = $(this);
					var $row = $item.parent();
					var $details = $row.next('div.details');
					var $li = $('li', Gallery.Elements.details);

					$item.click(function() {

						$('div.details').hide();
						$details.empty();
						var $html = $li.eq($item.data('rel')).html();
						$details.html($html).slideDown(600);
						$('html, body').animate({
							scrollTop: 0
						}, 0).animate({
							scrollTop: $details.offset().top
						}, 300);

					});
				});

			}
		}
	};

Gallery.suck.it();
});







