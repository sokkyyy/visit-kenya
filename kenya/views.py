from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status,permissions
from .models import User,Destination,DestinationGallery
from .serializers import UserSerializer,UserSerializerWithToken,DestinationSerializer
from django.http import HttpResponseRedirect
from rest_framework.views import APIView

@api_view(['GET'])
def current_user(request):
    '''
    Determine the current user by their token, and return their token.
    '''
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

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

class UserList(APIView):
    '''
    Create new user.
    '''
    
    permission_classes = (permissions.AllowAny,)

    def post(self,request,format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DestinationList(APIView):
    '''
    Get destinations from the db.
    '''


    def get(self,request,format=None):
        all_destinations = Destination.objects.all()
        serializers = DestinationSerializer(all_destinations, many=True)
        return Response(serializers.data)

@api_view(['GET'])    
def get_destination(request,destination_id):
    destination = Destination.objects.get(pk=destination_id)
    serializers = DestinationSerializer(destination)
    return Response(serializers.data)
    
@api_view(['GET'])
def get_destinations_category(request, destination_category):
    destinations = Destination.objects.filter(category=destination_category)
    serializers = DestinationSerializer(destinations, many=True)
    return Response(serializers.data)

