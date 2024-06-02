using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDTO
{
    [Required]
    public string Username { get; set; }

    [Required]
    [RegularExpression("(?=.*\\d)(?=.*[a-z)(?=.*[A-Z]).{4,8}$", ErrorMessage = "Password must be complex")]
    //[DataType(DataType.Password)]
    //[StringLength(8, MinimumLength = 12]
    public string Password { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    public string DisplayName { get; set; }
}
