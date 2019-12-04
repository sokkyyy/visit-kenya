from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import User
from .serializers import UserSerializer

@api_view(['GET','POST'])
def create_user(request):
    '''
    Create new user.
    '''
    
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            # User.objects.create_user() --> FOR HASHING PASSWORDS
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
@api_view(['GET'])
def user_details(request,username):
    '''
    Retrieve a user by username.
    '''
    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = UserSerializer(user,context={'request':request})
        return Response(serializer.data)