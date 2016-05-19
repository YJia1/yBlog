Template.NewBlogEntry.events({
	'click .fa-close' : function(){
		Session.set('newBlogEntry',false);
	}
});