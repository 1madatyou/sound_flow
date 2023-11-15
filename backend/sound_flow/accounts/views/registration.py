from rest_framework import status
from rest_framework.generics import GenericAPIView, CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from accounts.serializers import UserSerializer

from common.utils import generate_code, send_template_mail


REGISTRATION_CODE_LENGTH = 6

class RegistrationView(GenericAPIView):

    '''
    View for user registration
    '''

    permission_classes = [AllowAny]
    serializer_class  = UserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                {'errors': serializer.errors},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Generate registration code
        registration_code = generate_code(REGISTRATION_CODE_LENGTH)

        # Save data to session
        session = request.session
        session['registration_data'] = serializer.data
        session['registration_code'] = registration_code

        # Send registration code to email
        send_template_mail(
            'Registration',
            recipient_list=[serializer.data['email']],
            template_path=r'mail/sign_up_mail.html',
            context={'code': registration_code}
        )

        return Response(
            status=200
        )
        

class RegistrationConfirmView(APIView):

    '''
    View for confirm user registration by getting registration code from session and comparing with
    code from user, which he should get from email
    '''

    def post(self, request, *args, **kwargs):
        session = request.session
        print(request.COOKIES)
        print(dict(session))
        # Get data from session storage
        try:
            registration_data = session['registration_data']
            registration_code = session['registration_code']
        except KeyError:
            return Response(
                status=status.HTTP_409_CONFLICT
            )

        # Compare user and session registration code
        registration_code_from_user = request.data['registration_code']

        if not registration_code_from_user == registration_code:
            return Response(
                {'detail': 'incorrect_code'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
        # Save user
        serializer = UserSerializer(data=registration_data)

        if not serializer.is_valid():
            return Response(
                {'error': serializer.errors},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        serializer.save()

        return Response(
            serializer.data,
            status=201
        )




    
        
        
        
        
        
        

