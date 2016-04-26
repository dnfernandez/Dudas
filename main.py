import os
import jinja2
import webapp2
from Pregunta import Pregunta
from Respuesta import Respuesta
from google.appengine.api import users

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=["jinja2.ext.autoescape"],
    autoescape=True
)


class MainHandler(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
        listaPreguntas = Pregunta.query().order(-Pregunta.fecha)
        template_values = {
            'listaPreguntas': listaPreguntas,
            'user': user,
        }
        template = JINJA_ENVIRONMENT.get_template("pregunta.html")

        self.response.write(template.render(template_values))


class VerPregunta(webapp2.RequestHandler):
    def get(self):
        idP = self.request.GET
        user = users.get_current_user()
        pregunta = Pregunta.query(Pregunta.idPregunta == int(idP["id"]))
        respuestas = Respuesta.query(Respuesta.idPregunta == int(idP["id"]))

        if pregunta.count() < 1:
            self.redirect("/")

        template_values = {
            'pregunta': pregunta,
            'respuestas': respuestas,
            'idP': idP["id"],
            'user': user,
        }
        template = JINJA_ENVIRONMENT.get_template("respuestas.html")
        self.response.write(template.render(template_values))


class GuardarPregunta(webapp2.RequestHandler):
    def get(self):
        self.redirect("/")

    def post(self):
        self.titulo = self.request.get("tituloP")
        self.texto = self.request.get("textoP")
        self.autor = self.request.get("autorP")
        idUlt = 0
        listaPreguntas = Pregunta.query()
        for i in listaPreguntas:
            if (i.idPregunta > idUlt):
                idUlt = i.idPregunta
        self.idPregunta = idUlt + 1

        pregunta = Pregunta(idPregunta=self.idPregunta, titulo=self.titulo, texto=self.texto, autor=self.autor)
        pregunta.put()

        self.redirect("/")


class GuardarRespuesta(webapp2.RequestHandler):
    def get(self):
        self.redirect("/")

    def post(self):
        self.texto = self.request.get("textoR")
        self.autor = self.request.get("autorR")
        self.idP = self.request.get("idPreg")
        respuesta = Respuesta(idPregunta=int(self.idP), texto=self.texto, autor=self.autor)
        respuesta.put()

        self.redirect("/verPregunta?id={0}".format(self.idP))


class Login(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
        if user:
            self.redirect(users.create_logout_url(self.request.referer))
        else:
            self.redirect(users.create_login_url(self.request.referer))




app = webapp2.WSGIApplication(
    [('/', MainHandler), ('/verPregunta', VerPregunta), ("/crearPregunta", GuardarPregunta),
     ("/crearRespuesta", GuardarRespuesta), ("/login", Login)],
    debug=True)
