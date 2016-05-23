FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('MainLayout', {main: 'BlogEntries'} );
	}
});

FlowRouter.route('/my-blog', {
	name: 'my-blog',
	action() {
		BlazeLayout.render('MainLayout', {main: 'MyBlogEntries'} );
	}
});