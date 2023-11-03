from split_settings.tools import include


include(
    'settings/base.py',
    'settings/database.py',
    'settings/rest_framework.py',
    'settings/email.py',
    'settings/jwt.py'
)