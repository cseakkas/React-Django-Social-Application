from rest_framework import serializers
from social_feeds.models import Post, PostImage, PostComments
  
from django.contrib.auth import get_user_model

User = get_user_model()
 
class PostUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ["id", "username", "first_name", "last_name", "profile_image"] 
 
class PostSerializer(serializers.ModelSerializer): 
    user = PostUserSerializer(read_only=True) 
    images = serializers.SerializerMethodField()
    likes_count = serializers.IntegerField(source="likes.count", read_only=True)
    comments_count = serializers.IntegerField(source="comments.count", read_only=True)

    class Meta:
        model = Post
        fields = [
            "id",
            "user", 
            "content",
            "created_at",
            "images",
            "likes_count",
            "comments_count",
        ]

    def get_images(self, obj):
        return [img.image.url for img in obj.images.all()]





class PostCommentsSerializer(serializers.ModelSerializer):
    author_username = serializers.CharField(source="user.username", read_only=True)

    class Meta:
        model = PostComments
        fields = [
            "id",
            "user",
            "author_username",
            "post",
            "text",
            "created_at",
        ]