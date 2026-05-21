export default function Founder() {
  return (
    <section className="founderSection" id="founder">
      <div className="container">
        <div className="founderInner">

          <div className="founderPhoto fadeUp">
            <div className="founderPhotoInner">
              <img
                src="/images/founder-xuan.jpg"
                alt="Xuan, founder of IX Originals"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%', display: 'block' }}
              />
            </div>
          </div>

          <div className="founderContent fadeUp" data-delay="150">
            <span className="sectionLabel">The person behind it</span>
            <h2 className="sectionTitle">Hi! I&apos;m <em>Xuan.</em></h2>
            <p className="founderBody">
              Based in Singapore, and the person behind every single piece that leaves IX Originals.
            </p>
            <p className="founderBody">
              I grew up loving all things art, like painting, drawing, sketching, even claywork. And like a lot of you, I had a Gameboy glued to my hands playing Pokémon Ruby and Sapphire. I only got into collecting cards recently, but it hit fast... :p
            </p>
            <p className="founderBody">
              My favourite Pokémons are Mew and Mimikyu, and my current favourite card is the Mew AR 183/172.
            </p>
            <p className="founderBody">
              With some encouragement from the people around me, IX Originals became a thing. My hope is simple — to make Pokémon collecting a more fun and unique journey for everyone in the community!
            </p>

            <div className="founderFavs">
              <div className="founderFav">
                <span className="founderFavLabel">Favourite Pokémon</span>
                <span className="founderFavVal">Mew &amp; Mimikyu</span>
              </div>
              <div className="founderFav">
                <span className="founderFavLabel">Favourite card</span>
                <span className="founderFavVal">Mew AR 183/172</span>
              </div>
              <div className="founderFav">
                <span className="founderFavLabel">Based in</span>
                <span className="founderFavVal">Singapore</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
