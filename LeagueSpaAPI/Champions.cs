using System.ComponentModel.DataAnnotations;

namespace LeagueSpaAPI
{
    public class Champions
    {
        [Key]
        public int Id { get; set; }
            
        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(100)]
        public string Image { get; set; }

        [Required]
        public string Abilities { get; set; }

        [Required]
        public string Description { get; set; }
    }
}
