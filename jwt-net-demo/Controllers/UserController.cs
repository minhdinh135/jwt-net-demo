using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace jwt_net_demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _config;
        private JwtService _jwtService;
        
        List<User> users = new List<User>
        {
            new User { Email = "test@gmail.com", Password = "123", Role = "ADMIN"},
            new User { Email = "customer@gmail.com", Password = "12", Role = "CUSTOMER" }
        };

        public UserController(IConfiguration config)
        {
            _config = config;
            _jwtService = new JwtService(_config);
        }

        [HttpPost("Login")]
        public IActionResult Login([FromBody] UserDto request)
        {
            if(!users.Any(u => u.Email.Equals(request.Email) && u.Password.Equals(request.Password))) {
                return NotFound("Invalid credentials");
            }

            if(!users.Any(u => u.Role.Equals(request.Role)))
            {
                return Unauthorized("User is not authorized");
            }

            var token = _jwtService.GenerateToken(request);

            return Ok(token);
        }
    }
}
