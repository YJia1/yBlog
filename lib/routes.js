if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('blog-entries');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context, redirect){
	//if user is not logged in
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		//If user is logged in, go to the blog entries page, otherwise just go to home page
		if(Meteor.userId()){
			FlowRouter.go('blog-entries');
		}
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/blog-entries', {
	name: 'blog-entries',
	action() {
		BlazeLayout.render('MainLayout', {main: 'BlogEntries'} );
	}
});

FlowRouter.route('/blogEntry/:id', {
	name: 'blogEntrySingle',
	action() {
		BlazeLayout.render('MainLayout', {main: 'BlogEntrySingle'} );
	}
});