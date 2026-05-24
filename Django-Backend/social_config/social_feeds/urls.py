from django.urls import path
from . import views

urlpatterns = [
    path("", views.FeedListView.as_view(), name="feed-list"),
    path("likeUpdate/<int:post_id>/", views.FeedsLikeUpdate.as_view(), name="like-update"),
    path("commentUpdate/<int:post_id>/", views.FeedCommentUpdate.as_view(), name="comment-update"),

]


