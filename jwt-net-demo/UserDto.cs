using Microsoft.AspNetCore.Identity.Data;

namespace jwt_net_demo
{
    public class UserDto 
    {
       public string Email { get; set; }

        public string Password { get; set; }

        public string Role { get; set; }
    }
}
