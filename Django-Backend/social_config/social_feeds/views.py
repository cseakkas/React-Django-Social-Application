from django.shortcuts import render

# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from social_auth.models import User
from .models import Post, PostImage, PostLikes, PostComments
from .serializers import PostSerializer, PostCommentsSerializer

from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken


class FeedListView(APIView): 

    def get(self, request):
        posts = Post.objects.all().order_by("-created_at")
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)


    def post(self, request):
        get_data = request.data
        user = request.user

        print("Received data:", get_data)
        content = request.data.get("content")
        images = request.FILES.getlist("images")


        post = Post.objects.create(user=user, content=content)

        for img in images:
            PostImage.objects.create(post=post, image=img)

        serializer = PostSerializer(post)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def delete(self, request, post_id):
        user = request.user
        try:
            post = Post.objects.get(id=post_id, user=user)
            post.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Post.DoesNotExist:
            return Response({"error": "Post not found or not owned by user"}, status=status.HTTP_404_NOT_FOUND)
        

    def put(self, request, post_id):
        user = request.user
        content = request.data.get("content")
        images = request.FILES.getlist("images")

        try:
            post = Post.objects.get(id=post_id, user=user)
            post.content = content
            post.save()

            if images:
                post.images.all().delete()
                for img in images:
                    PostImage.objects.create(post=post, image=img)

            serializer = PostSerializer(post)
            return Response(serializer.data)
        except Post.DoesNotExist:
            return Response({"error": "Post not found or not owned by user"}, status=status.HTTP_404_NOT_FOUND) 
        

class FeedsLikeUpdate(APIView):
    def post(self, request, post_id):
        user = request.user
        try:
            post = Post.objects.get(id=post_id)
            like, created = PostLikes.objects.get_or_create(user=user, post=post)
            if not created:
                like.delete()
                return Response({"message": "Post unliked"})
            return Response({"message": "Post liked"})
        except Post.DoesNotExist:
            return Response({"error": "Post not found"}, status=status.HTTP_404_NOT_FOUND)


class FeedCommentUpdate(APIView):
    def post(self, request, post_id):
        user = request.user
        content = request.data.get("content")
        try:
            post = Post.objects.get(id=post_id)
            comment = PostComments.objects.create(user=user, post=post, content=content)
            serializer = PostCommentsSerializer(comment)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Post.DoesNotExist:
            return Response({"error": "Post not found"}, status=status.HTTP_404_NOT_FOUND)










