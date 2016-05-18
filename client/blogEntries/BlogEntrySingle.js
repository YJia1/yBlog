Template.BlogEntrySingle.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('singleBlogEntry', id);
	});
});

Template.BlogEntrySingle.helpers({
	blogEntry: ()=> {
		var id = FlowRouter.getParam('id');
		return BlogEntries.findOne({_id: id});
	}
});