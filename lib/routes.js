FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/blog-entries', {
	name: 'blog-entries',
	action() {
		BlazeLayout.render('MainLayout', {main: 'BlogEntries'} );
	}
});