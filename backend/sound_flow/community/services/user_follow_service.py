from django.core.exceptions import ObjectDoesNotExist

from accounts.models import User


class UserFollowService:
    """Class for user follow actions"""

    def __init__(self, follower_user_id: int, target_user_id: int) -> None:
        user_ids = [follower_user_id, target_user_id]
        users = list(User.objects.filter(id__in=user_ids))

        if len(users) != 2:
            raise ObjectDoesNotExist("One or both users do not exist.")

        self.follower_user = next(
            (user for user in users if user.id == follower_user_id), None
        )
        self.target_user = next(
            (user for user in users if user.id == target_user_id), None
        )

    def follow(self):
        self.target_user.followers.add(self.follower_user)

    def unfollow(self):
        self.target_user.followers.remove(self.follower_user)
