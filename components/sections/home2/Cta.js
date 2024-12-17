import Link from "next/link"
import VideoPopup from "@/components/elements/VideoPopup"

export default function Cta() {
  return (
    <>
      <section className="cta-section centred bg-color-3">
            <div className="bg-layer" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
            <div className="auto-container">
                <div className="content-box">
                    <h2>Join Fxvibe & Begin!</h2>
                    <h3>Play our <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption="">demo video</Link> or engage with trading experts.</h3>
                    <div className="lower-box">
                        <Link href="/index-2" className="theme-btn btn-two"><span>Start Trading</span></Link>
                        <div className="chat-box">
                            <div className="image-box"><img src="assets/images/resource/chat-1.png" alt=""/></div>
                            <button type="button">Live Chat With <br />Experts</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
